resource "aws_route_table" "public_rtb"{
    vpc_id = aws_vpc.terraform_vpc.id

    tags = {
        Name = "public_rtb"
    }
}

resource "aws_route_table_association" "public_rtb_asso1" {
    subnet_id = aws_subnet.public_subnet1.id
    route_table_id = aws_route_table.public_rtb.id

}

resource "aws_route_table_association" "public_rtb_asso2" {
    subnet_id = aws_subnet.public_subnet2.id
    route_table_id = aws_route_table.public_rtb.id

}

