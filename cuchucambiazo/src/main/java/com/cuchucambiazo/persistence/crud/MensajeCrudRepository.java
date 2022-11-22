package com.cuchucambiazo.persistence.crud;

import com.cuchucambiazo.persistence.entity.Mensaje;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MensajeCrudRepository extends CrudRepository <Mensaje, Integer> {

    List<Mensaje> findAllByIdMatcheo(Integer idMatcheo);

}
