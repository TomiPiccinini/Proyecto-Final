package com.cuchucambiazo.persistence.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table
public class Foto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_foto")
    private Integer idFoto;

    @Column(name = "id_publicacion")
    private Integer idPublicacion;

    @Column
    private String url;

    @ManyToOne
    @JoinColumn(name = "id_publicacion", insertable = false, updatable = false)
    private Publicacion publicacion;

}
