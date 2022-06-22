resource "aws_internet_gateway" "igw-terraform" {
    vpc_id = aws_vpc.terraform_vpc.id
    tags = {
        Name = "vpc_igw-terraform"
    }
}

# data "aws_internet_gateway" "available" {
#     state = "available"
#   }
  