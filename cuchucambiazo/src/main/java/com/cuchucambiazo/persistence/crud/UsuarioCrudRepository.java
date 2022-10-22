package com.cuchucambiazo.persistence.crud;


import com.cuchucambiazo.persistence.entity.Usuario;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface UsuarioCrudRepository extends CrudRepository<Usuario, Integer> {

    @Query(
            value = "SELECT * FROM usuario u WHERE u.email = :email ",
            nativeQuery = true
    )
    Usuario findByEmail(@Param("email") String email);

}
