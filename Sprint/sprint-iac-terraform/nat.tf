resource "aws_eip" "nat_ip" {
    vpc = true

    lifecycle {
        create_before_destroy = true
    }
}

resource "aws_nat_gateway" "nat_gateway" {
    allocation_id = aws_eip.nat_ip.id

    subnet_id = aws_subnet.public_subnet1.id

    tags = {
        Name = "nat_gateway"
    }
}

resource "aws_route_table" "private_rtb" {
    vpc_id = aws_vpc.terraform_vpc.id

    tags = {
        Name = "private_rtb"
    }
}

resource "aws_route_table_association" "private_rtb_asso1" {
    subnet_id = aws_subnet.private_subnet1.id
    route_table_id = aws_route_table.private_rtb.id

}

resource "aws_route_table_association" "private_rtb_asso2" {
    subnet_id = aws_subnet.private_subnet2.id
    route_table_id = aws_route_table.private_rtb.id

}

resource "aws_route" "private_rtb_nat" {
    route_table_id = aws_route_table.private_rtb.id
    destination_cidr_block = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.nat_gateway.id 

}
