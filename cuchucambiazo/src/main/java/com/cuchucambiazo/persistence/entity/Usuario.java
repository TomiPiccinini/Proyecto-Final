package com.cuchucambiazo.persistence.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Integer idUsuario;

    @Column
    private String nombre;

    @Column
    private String contrasenia;

    @Column
    private String email;

    @OneToMany(mappedBy = "usuario")
    private List<Publicacion> publicaciones;


}
