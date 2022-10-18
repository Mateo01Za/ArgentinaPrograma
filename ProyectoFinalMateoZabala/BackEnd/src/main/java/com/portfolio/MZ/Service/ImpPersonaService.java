
package com.portfolio.MZ.Service;

import com.portfolio.MZ.Entity.Persona;
import com.portfolio.MZ.Interface.IPersonaService;
import com.portfolio.MZ.Repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
/**
 *
 * @author Mateo
 */
public class ImpPersonaService implements IPersonaService{
    @Autowired IPersonaRepository ipersonarepository;
    
    @Override
    public List<Persona> getPersona() {
        List<Persona> personas = ipersonarepository.findAll();
        return personas;
    }

    @Override
    public void savePersona(Persona persona) {
        ipersonarepository.save(persona);
    }

    @Override
    public void deletePersona(Long id) {
        ipersonarepository.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
        Persona pers = ipersonarepository.findById(id).orElse(null);
        return pers;
    }
    
}
