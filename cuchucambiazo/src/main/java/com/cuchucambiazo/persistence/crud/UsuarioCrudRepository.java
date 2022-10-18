package com.cuchucambiazo.persistence.crud;


import com.cuchucambiazo.persistence.entity.Usuario;
import org.springframework.data.repository.CrudRepository;



public interface UsuarioCrudRepository extends CrudRepository<Usuario, Integer> {
}
