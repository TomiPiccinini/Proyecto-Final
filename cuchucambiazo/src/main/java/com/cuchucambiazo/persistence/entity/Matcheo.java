package com.cuchucambiazo.persistence.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "match")
public class Matcheo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_match")
    private Integer idMatcheo;

    @Column
    private String fecha;

    @Column(name = "id_usuario1")
    private Integer usuarioId1;

    @Column(name = "id_usuario2")
    private Integer usuarioId2;

    @Column(name = "id_usuario3")
    private Integer usuarioId3;

    @Column
    private String estado;


}
