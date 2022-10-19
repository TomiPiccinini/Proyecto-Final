package com.cuchucambiazo.persistence.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "match")
public class Matcheo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_match")
    private Integer idMatcheo;

    @Column(name = "fecha_alta")
    private String fechaAlta;

    @Column(name = "id_publication1")
    private Integer publicacionId1;

    @Column(name = "id_publication2")
    private Integer publicacionId2;

    @Column(name = "fecha_baja")
    private String fechaBaja;

    @ManyToOne
    @JoinColumn(name = "id_publicacion", insertable = false, updatable = false)
    private Publicacion publicacion1;

    @ManyToOne
    @JoinColumn(name = "id_publicacion", insertable = false, updatable = false)
    private Publicacion publicacion2;

    @OneToMany(mappedBy = "matcheo")
    private List<Mensaje> mensajes;


}
