package com.codeclan.example.hair_goals_backend;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "measurements")
public class Measurement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "length")
    private Integer length;

    @Column(name = "date_measured")
    private String dateMeasured;

    @JsonIgnoreProperties(value = "measurements")
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Measurement(Integer length, String dateMeasured, User user) {
        this.length = length;
        this.dateMeasured = dateMeasured;
        this.user = user;
    }

    public Measurement() {}

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Integer getLength() {
        return length;
    }
    public void setLength(Integer length) {
        this.length = length;
    }
    public String getDateMeasured() {
        return dateMeasured;
    }
    public void setDateMeasured(String dateMeasured) {
        this.dateMeasured = dateMeasured;
    }


}
