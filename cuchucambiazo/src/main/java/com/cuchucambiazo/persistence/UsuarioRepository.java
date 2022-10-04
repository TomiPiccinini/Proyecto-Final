package com.cuchucambiazo.persistence;

import com.cuchucambiazo.persistence.crud.UsuarioCrudRepository;
import com.cuchucambiazo.persistence.entity.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UsuarioRepository {

    @Autowired
    private UsuarioCrudRepository usuarioCrudRepository;

    public Usuario save(Usuario usuario){
        return usuarioCrudRepository.save(usuario);
    }
}
