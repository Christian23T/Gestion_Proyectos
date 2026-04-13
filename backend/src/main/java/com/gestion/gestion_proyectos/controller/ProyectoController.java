package com.gestion.gestion_proyectos.controller;

import com.gestion.gestion_proyectos.model.Proyecto;
import com.gestion.gestion_proyectos.service.ProyectoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/proyectos")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class ProyectoController {

    private final ProyectoService proyectoService;

    @GetMapping
    public List<Proyecto> listar() {
        return proyectoService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Proyecto> obtener(@PathVariable Long id) {
        return ResponseEntity.ok(proyectoService.obtenerPorId(id));
    }

    @PostMapping
    public ResponseEntity<Proyecto> crear(@RequestBody Proyecto proyecto) {
        return ResponseEntity.ok(proyectoService.crear(proyecto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Proyecto> actualizar(@PathVariable Long id, @RequestBody Proyecto proyecto) {
        return ResponseEntity.ok(proyectoService.actualizar(id, proyecto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        proyectoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}