package com.cuchucambiazo.persistence.crud;

import api.orange.business.controller.user.model.User;
import com.cuchucambiazo.persistence.entity.Usuario;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UsuarioCrudRepository extends CrudRepository<Usuario, Integer> {
}
