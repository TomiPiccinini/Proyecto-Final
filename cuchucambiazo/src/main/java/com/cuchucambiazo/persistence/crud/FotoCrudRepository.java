package com.cuchucambiazo.persistence.crud;

import com.cuchucambiazo.persistence.entity.Foto;
import org.springframework.data.repository.CrudRepository;

public interface FotoCrudRepository extends CrudRepository<Foto, Integer> {
}
