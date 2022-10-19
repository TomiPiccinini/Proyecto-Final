package com.cuchucambiazo.persistence.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Data
public class PublicacionTagPK implements Serializable {

    @Column(name = "id_publicacion")
    private Integer idPublicacion;

    @Column(name = "id_tag")
    private Integer idTag;

}
