
package com.portfolio.MZ.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
@Getter @Setter
@Entity
/**
 *
 * @author Mateo
 */
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotNull
    @Size(min = 1, max = 60, message = "No cumple con Longitud")
    private String nombre;
    @NotNull
    @Size(min = 1, max = 60, message = "No cumple con Longitud")
    private String apellido;
    @Size(min = 1, max = 60, message = "No cumple con Longitud")
    private String img;
    
    
}
