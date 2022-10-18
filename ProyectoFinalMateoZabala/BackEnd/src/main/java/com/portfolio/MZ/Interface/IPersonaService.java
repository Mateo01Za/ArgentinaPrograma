/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.MZ.Interface;

import com.portfolio.MZ.Entity.Persona;
import java.util.List;

/**
 *
 * @author Mateo
 */
public interface IPersonaService {
    //Traer lista persona
    public List<Persona> getPersona();
    
    //Guardar objeto t Persona
    public void savePersona(Persona persona);
    
    //elimar obj tipo persona
    public void deletePersona(Long id);
    
    //Buscar persona por id
    public Persona findPersona(Long id);
}
