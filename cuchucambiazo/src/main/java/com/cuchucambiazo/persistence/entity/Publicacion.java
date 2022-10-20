package com.cuchucambiazo.persistence.entity;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "publicacion")
public class Publicacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_publicacion")
    private Integer idPublicacion;

    @Column
    private String descripcion;

    @Column
    private String medidas;

    @Column
    private String estado;

    @Column(name = "fecha_modificacion")
    private String fechaModificacion;

    @Column(name = "fecha_baja")
    private String fechaBaja;

    @ManyToOne
    @JoinColumn(name = "id_usuario", insertable = false, updatable = false)
    private Usuario usuario;

    @OneToMany(mappedBy = "tag")
    private List<PublicacionTag> tags;

    @OneToMany(mappedBy = "publicacion")
    private List<Foto> fotos;

    @OneToMany(mappedBy = "publicacion", cascade = {CascadeType.ALL})
    private List<MeGusta> meGustas;

}
