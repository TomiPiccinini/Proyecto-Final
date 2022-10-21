package com.cuchucambiazo.persistence.entity;


import javax.persistence.*;

@Entity
@Table(name = "me_gusta")
public class MeGusta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_me_gusta")
    private Integer idMeGusta;

    @Column(name = "id_usuario_emisor")
    private Integer idUsuarioEmisor;

    @Column(name = "id_publicacion")
    private Integer idPublicacion;

    @Column(name = "id_usuario_receptor")
    private Integer idUsuarioReceptor;

    @ManyToOne
    @JoinColumn(name = "id_usuario_emisor", insertable = false, updatable = false)
    private Usuario usuarioEmisor;

    @ManyToOne
    @JoinColumn(name = "id_usuario_receptor", insertable = false, updatable = false)
    private Usuario usuarioReceptor;

    @ManyToOne
    @JoinColumn(name = "id_publicacion", insertable = false, updatable = false)
    private Publicacion publicacion;

    public Integer getIdMeGusta() {
        return idMeGusta;
    }

    public void setIdMeGusta(Integer idMeGusta) {
        this.idMeGusta = idMeGusta;
    }

    public Integer getIdUsuarioEmisor() {
        return idUsuarioEmisor;
    }

    public void setIdUsuarioEmisor(Integer idUsuarioEmisor) {
        this.idUsuarioEmisor = idUsuarioEmisor;
    }

    public Integer getIdPublicacion() {
        return idPublicacion;
    }

    public void setIdPublicacion(Integer idPublicacion) {
        this.idPublicacion = idPublicacion;
    }

    public Integer getIdUsuarioReceptor() {
        return idUsuarioReceptor;
    }

    public void setIdUsuarioReceptor(Integer idUsuarioReceptor) {
        this.idUsuarioReceptor = idUsuarioReceptor;
    }

    public Usuario getUsuarioEmisor() {
        return usuarioEmisor;
    }

    public void setUsuarioEmisor(Usuario usuarioEmisor) {
        this.usuarioEmisor = usuarioEmisor;
    }

    public Usuario getUsuarioReceptor() {
        return usuarioReceptor;
    }

    public void setUsuarioReceptor(Usuario usuarioReceptor) {
        this.usuarioReceptor = usuarioReceptor;
    }

    public Publicacion getPublicacion() {
        return publicacion;
    }

    public void setPublicacion(Publicacion publicacion) {
        this.publicacion = publicacion;
    }
}
