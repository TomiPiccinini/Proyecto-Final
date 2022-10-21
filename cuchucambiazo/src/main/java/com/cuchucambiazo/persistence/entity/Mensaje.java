package com.cuchucambiazo.persistence.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
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

    public Integer getIdMensaje() {
        return idMensaje;
    }

    public void setIdMensaje(Integer idMensaje) {
        this.idMensaje = idMensaje;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public Integer getIdMatcheo() {
        return idMatcheo;
    }

    public void setIdMatcheo(Integer idMatcheo) {
        this.idMatcheo = idMatcheo;
    }

    public String getFechaHora() {
        return fechaHora;
    }

    public void setFechaHora(String fechaHora) {
        this.fechaHora = fechaHora;
    }

    public Integer getIdPublicacionReceptor() {
        return idPublicacionReceptor;
    }

    public void setIdPublicacionReceptor(Integer idPublicacionReceptor) {
        this.idPublicacionReceptor = idPublicacionReceptor;
    }

    public Integer getIdPublicacionEmisor() {
        return idPublicacionEmisor;
    }

    public void setIdPublicacionEmisor(Integer idPublicacionEmisor) {
        this.idPublicacionEmisor = idPublicacionEmisor;
    }

    public Matcheo getMatcheo() {
        return matcheo;
    }

    public void setMatcheo(Matcheo matcheo) {
        this.matcheo = matcheo;
    }
}
