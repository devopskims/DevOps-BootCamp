resource "aws_vpc" "terraform_vpc" {
    cidr_block = "10.0.0.0/16"
    tags = {
        Name = "terraform_vpc"
    }
}

resource "aws_subnet" "public_subnet1" {
    vpc_id = aws_vpc.terraform_vpc.id
    cidr_block = "10.0.0.0/24"

    availability_zone = "ap-northeast-2a"

    tags = {
        Name = "public_subnet1"
    }

}

resource "aws_subnet" "public_subnet2" {
    vpc_id = aws_vpc.terraform_vpc.id
    cidr_block = "10.0.4.0/24"

    availability_zone = "ap-northeast-2d"

    tags = {
        Name = "public_subnet2"
    }
}

resource "aws_subnet" "private_subnet1" {
    vpc_id = aws_vpc.terraform_vpc.id
    cidr_block = "10.0.1.0/24"

    availability_zone = "ap-northeast-2b"

    tags = {
        Name = "private_subnet1"
    }
}

resource "aws_subnet" "private_subnet2" {
    vpc_id = aws_vpc.terraform_vpc.id
    cidr_block = "10.0.2.0/24"

    availability_zone = "ap-northeast-2c"

    tags = {
        Name = "private_subnet2"
    }

}
