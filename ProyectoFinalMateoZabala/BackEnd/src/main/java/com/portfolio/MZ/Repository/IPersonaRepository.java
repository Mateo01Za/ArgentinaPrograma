
package com.portfolio.MZ.Repository;

import com.portfolio.MZ.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
/**
 *
 * @author Mateo
 */
public interface IPersonaRepository extends JpaRepository<Persona,Long>{
    
}
