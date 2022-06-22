resource "aws_db_instance" "default" {
    allocated_storage    = 10
    engine               = "mysql"
    engine_version       = "5.7"
    instance_class       = "db.t2.micro"
    name                 = "mydb"
    username             = "admin"
    password             = "admin123"
    parameter_group_name = "tera.mysql5.7"
    skip_final_snapshot  = true
}

