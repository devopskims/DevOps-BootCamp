terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.15.0"
}

provider "aws" {
  profile = "default"
  region  = "ap-northeast-2"
}

resource "aws_instance" "app_server" {
  ami                    = "ami-0ed11f3863410c386"
  instance_type          = "t2.micro"
  vpc_security_group_ids = ["sg-0411b86868aca4b8f"]
  subnet_id              = "subnet-013e104406d055792" # vpc-a
  #subnet_id = "subnet-0e0ca9cb88c8c6749" # vpc-b 
  user_data = <<-EOF
                #!/bin/bash
                echo "Hello, World" > index.html
                nohup busybox httpd -f -p ${var.server_port} &
                EOF
  tags = {
    Name = "ec2-project"
  }
}

resource "aws_security_group" "instance" {
  name = "project-securityg"

  ingress {
    from_port   = var.server_port
    to_port     = var.server_port
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

variable "server_port" {
  description = "The port the server will user for HTTP requests"
  type        = number
  default     = 8080
}


data "aws_subnet_ids" "default" {
    vpc_id = data.aws_vpc.default.id
}

data "aws_vpc" "default" {
    default = true
}

data "aws_vpc" "selected" {
  id = var.vpc_cidr
}

# date "aws_vip" "simple_vpc"{
#   id = 
# }

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "3.14.0"

}

module "security-group" {
  source  = "terraform-aws-modules/security-group/aws"
  version = "4.9.0"
 
}

module "endpoints" {
  source = "terraform-aws-modules/vpc/aws//modules/vpc-endpoints"

  vpc_id             = aws_vpc.terraform_vpc.id
  security_group_ids = ["sg-0411b86868aca4b8f"]

  # endpoints = {
  #   s3 = {
  #     # interface endpoint
  #     service             = "s3"
  #     tags                = { Name = "s3-vpc-endpoint" }
# }
}

# module "rds" {
#   source  = "terraform-aws-modules/rds/aws"
#   version = "3.0.0"
#   # insert the 38 required variables here
# }