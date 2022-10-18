package com.cuchucambiazo.persistence.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "me_gusta")
public class MeGusta {

    @EmbeddedId
    private MeGustaPK id;

    @ManyToOne
    @JoinColumn(name = "id_usuario", insertable = false, updatable = false)
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "id_publicacion", insertable = false, updatable = false)
    private Publicacion publicacion;

}
