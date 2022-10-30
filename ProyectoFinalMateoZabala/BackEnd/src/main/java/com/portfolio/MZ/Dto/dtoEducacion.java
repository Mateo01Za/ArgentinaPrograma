/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.MZ.Dto;

import javax.validation.constraints.NotBlank;

/**
 *
 * @author Mateo
 */
public class dtoEducacion {
    @NotBlank
    private String nombreE;
    @NotBlank
    private String descripcionE;
    private String imagenE;

    public dtoEducacion(String nombreE, String descripcionE, String imagenE) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imagenE = imagenE;
    }

    public dtoEducacion() {
    }

    public String getNombreE() {
        return nombreE;
    }

    public void setNombreE(String nombreE) {
        this.nombreE = nombreE;
    }

    public String getDescripcionE() {
        return descripcionE;
    }

    public void setDescripcionE(String descripcionE) {
        this.descripcionE = descripcionE;
    }
    
    public String getImagenE(){
        return imagenE;
    }
    
    public void setImagenE(String imagenE){
        this.imagenE = imagenE;
    }
    
    
    
    
}
