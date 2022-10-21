package com.cuchucambiazo.persistence.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "match")
public class Matcheo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_match")
    private Integer idMatcheo;

    @Column(name = "id_publicacion1")
    private Integer idPublicacion1;

    @Column(name = "id_publicacion2")
    private Integer idPublicacion2;

    private String estado;

    @Column(name = "fecha_alta")
    private String fechaAlta;

    @Column(name = "fecha_baja")
    private String fechaBaja;

    @ManyToOne
    @JoinColumn(name = "id_publicacion1", insertable = false, updatable = false)
    private Publicacion publicacion1;

    @ManyToOne
    @JoinColumn(name = "id_publicacion2", insertable = false, updatable = false)
    private Publicacion publicacion2;

    @OneToMany(mappedBy = "matcheo")
    private List<Mensaje> mensajes;

    public Integer getIdMatcheo() {
        return idMatcheo;
    }

    public void setIdMatcheo(Integer idMatcheo) {
        this.idMatcheo = idMatcheo;
    }

    public Integer getIdPublicacion1() {
        return idPublicacion1;
    }

    public void setIdPublicacion1(Integer idPublicacion1) {
        this.idPublicacion1 = idPublicacion1;
    }

    public Integer getIdPublicacion2() {
        return idPublicacion2;
    }

    public void setIdPublicacion2(Integer idPublicacion2) {
        this.idPublicacion2 = idPublicacion2;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getFechaAlta() {
        return fechaAlta;
    }

    public void setFechaAlta(String fechaAlta) {
        this.fechaAlta = fechaAlta;
    }

    public String getFechaBaja() {
        return fechaBaja;
    }

    public void setFechaBaja(String fechaBaja) {
        this.fechaBaja = fechaBaja;
    }

    public Publicacion getPublicacion1() {
        return publicacion1;
    }

    public void setPublicacion1(Publicacion publicacion1) {
        this.publicacion1 = publicacion1;
    }

    public Publicacion getPublicacion2() {
        return publicacion2;
    }

    public void setPublicacion2(Publicacion publicacion2) {
        this.publicacion2 = publicacion2;
    }

    public List<Mensaje> getMensajes() {
        return mensajes;
    }

    public void setMensajes(List<Mensaje> mensajes) {
        this.mensajes = mensajes;
    }
}
