package com.cuchucambiazo.persistence.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "publicacion_tag")
public class PublicacionTag {

    @EmbeddedId
    private PublicacionTagPK id;

    @ManyToOne
    @JoinColumn(name = "id_publicacion", insertable = false, updatable = false)
    private Publicacion publicacion;

    @ManyToOne
    @JoinColumn(name = "id_tag", insertable = false, updatable = false)
    private Tag tag;

}
