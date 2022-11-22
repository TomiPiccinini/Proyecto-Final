package com.cuchucambiazo.persistence;

import api.cuchucambiazo.controller.user.model.User;
import com.cuchucambiazo.domain.repository.UserRepository;
import com.cuchucambiazo.persistence.builds.UserBuilds;
import com.cuchucambiazo.persistence.crud.UsuarioCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UsuarioRepository  implements UserRepository {

    @Autowired
    private UsuarioCrudRepository repository;

    @Autowired
    private UserBuilds builds;

    @Override
    public User findByEmail(String email) {
        return builds.UsuarioToUser(repository.findByEmail(email));
    }

    public User findByUserId(Integer usuarioId){return builds.UsuarioToUser(repository.findById(usuarioId).get());}
}
