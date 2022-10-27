/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.MZ.Repository;

import com.portfolio.MZ.Entity.Proyecto;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Mateo
 */
public interface RProyecto extends JpaRepository<Proyecto, Integer>{
    Optional<Proyecto> findByNombre(String Nombre);
    public boolean existsByNombre(String Nombre);
    
}
