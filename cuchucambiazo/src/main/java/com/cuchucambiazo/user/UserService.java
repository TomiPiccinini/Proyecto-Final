package com.cuchucambiazo.user;

import api.orange.business.controller.user.model.UserResponse;
import api.orange.business.controller.user.model.UsersRequest;
import com.cuchucambiazo.persistence.UsuarioRepository;
import com.cuchucambiazo.persistence.entity.Usuario;
import com.cuchucambiazo.persistence.mapper.UserMapper;
import com.cuchucambiazo.user.build.ResponseBuild;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private ResponseBuild responseBuild;

    @Autowired
    private UsuarioRepository usuarioRepository;


    public UserResponse saveUsers(UsersRequest usersRequest){

        usersRequest.getUserList().forEach(a -> {
            Usuario usuario = new Usuario();
            usuario.setNombre(a.getUserName());

            //Usuario usuario = userMapper.toUsuario(a);

            usuarioRepository.save(usuario);

        });


        return responseBuild.userResponseBuild("00","Correcto paaaaa");
    }
}
