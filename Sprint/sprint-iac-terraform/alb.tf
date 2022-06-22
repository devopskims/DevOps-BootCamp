resource "aws_alb" "tf_alb-tera" {
    name                            = "tera"
    internal                        = false
    load_balancer_type              = "application"
    idle_timeout                    = 60

    subnets                         = [
        aws_vpc.terraform_vpc.id,
        aws_vpc.terraform_vpc.id,
    ]
    enable_deletion_protection      = false

    lifecycle {
        create_before_destroy       = true 
    }
    tags = {
        Name                        = "tera"
        Env                         = "stg"
        Owner                       = "iac"
        Role                        = "alb"
        Service                     = "network"
    }
}

resource "aws_alb_target_group" "tf_alb_target_group-tera" {
    name                            = "web1"
    port                            = 80
    protocol                        = "HTTP"
    vpc_id                          = aws_vpc.terraform_vpc.id
    health_check {
        interval                    = 30
        path                        = "/"
        timeout                     = 3
        healthy_threshold           = 3
        unhealthy_threshold         = 2
        matcher                     = "200"
    }
    tags = {
        Name                        = "tera"
        Env                         = "stg"
        Owner                       = "iac"
        Role                        = "alb_target_group"
        Service                     = "network"
    }
}

resource "aws_alb_listener" "tf_alb_listener_80" {
    load_balancer_arn               = aws_alb.tf_alb-tera.arn
    port                            = "80"
    protocol                        = "HTTP"
    default_action {
        type                        = "redirect"
        redirect {
            port                    = "443"
            protocol                = "HTTPS"
            status_code             = "HTTP_301"
        }
    }
}

resource "aws_alb_listener" "tf_alb_listener_443" {
    load_balancer_arn               = aws_alb.tf_alb-tera.arn
    port                            = "443"
    protocol                        = "HTTPS"
    ssl_policy                      = "ELBSecurityPolicy-2016-08"

    default_action {
        type = "forward"
        target_group_arn = aws_alb_target_group.tf_alb_target_group-tera.arn
    }
}

resource "aws_alb_target_group_attachment" "tf_attachment-tera" {
    target_group_arn                = aws_alb_target_group.tf_alb_target_group-tera.arn
    target_id                       = aws_instance.app_server.id
    port                            = 80
}