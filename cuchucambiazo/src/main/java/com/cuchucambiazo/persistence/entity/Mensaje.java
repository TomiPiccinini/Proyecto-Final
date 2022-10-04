package com.cuchucambiazo.persistence.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table
public class Mensaje {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_mensaje")
    private Integer idMensaje;

    @Column
    private String texto;

    @Column(name = "id_matcheo")
    private Integer idMatcheo;

    @Column(name = "fecha_hora")
    private String fechaHora;

    @Column(name = "id_publicacion_receptor")
    private Integer idPublicacionReceptor;

    @Column(name = "id_publicacion_emisor")
    private Integer idPublicacionEmisor;

    @ManyToOne
    @JoinColumn(name = "id_matcheo", insertable = false, updatable = false)
    private Matcheo matcheo;

}
