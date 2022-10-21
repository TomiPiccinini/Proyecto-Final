package com.cuchucambiazo.persistence.builds;

import api.cuchucambiazo.controller.user.model.User;
import com.cuchucambiazo.persistence.entity.Usuario;
import org.springframework.stereotype.Component;

@Component
public class UserBuilds {

    public User UsuarioToUser(Usuario usuario){

        User user = new User();

        user.setName(usuario.getNombre());
        user.setEmail(usuario.getEmail());
        user.setPassword(usuario.getContrasenia());

        return user;
    }

    public Usuario UserToUsuario(User user){

        Usuario usuario = new Usuario();

        usuario.setNombre(user.getName());
        usuario.setEmail(user.getEmail());
        usuario.setContrasenia(user.getPassword());

        return usuario;
    }

}
