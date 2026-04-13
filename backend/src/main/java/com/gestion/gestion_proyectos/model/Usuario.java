package com.gestion.gestion_proyectos.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Data
@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String nombre;

    @Column(nullable = false, unique = true, length = 150)
    private String email;

    @Column(length = 50)
    private String rol = "MIEMBRO";

    @OneToMany(mappedBy = "usuario", fetch = FetchType.LAZY)
    @JsonIgnore  // ← CLAVE
    private List<Tarea> tareas;
}