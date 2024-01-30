package com.jun.service.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "paragraph")
public class PostEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "detail")
    private String detail;

    public PostEntity () {}

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }
}
