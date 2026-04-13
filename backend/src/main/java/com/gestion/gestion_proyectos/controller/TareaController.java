package com.gestion.gestion_proyectos.controller;

import com.gestion.gestion_proyectos.model.Tarea;
import com.gestion.gestion_proyectos.model.Tarea.EstadoTarea;
import com.gestion.gestion_proyectos.service.TareaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/tareas")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class TareaController {

    private final TareaService tareaService;

    @GetMapping
    public List<Tarea> listar() {
        return tareaService.listarTodas();
    }

    @GetMapping("/proyecto/{proyectoId}")
    public List<Tarea> listarPorProyecto(@PathVariable Long proyectoId) {
        return tareaService.listarPorProyecto(proyectoId);
    }

    @GetMapping("/usuario/{usuarioId}")
    public List<Tarea> listarPorUsuario(@PathVariable Long usuarioId) {
        return tareaService.listarPorUsuario(usuarioId);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tarea> obtener(@PathVariable Long id) {
        return ResponseEntity.ok(tareaService.obtenerPorId(id));
    }

    @PostMapping("/proyecto/{proyectoId}")
    public ResponseEntity<Tarea> crear(
            @RequestBody Tarea tarea,
            @PathVariable Long proyectoId,
            @RequestParam(required = false) Long usuarioId) {
        return ResponseEntity.ok(tareaService.crear(tarea, proyectoId, usuarioId));
    }

    @PatchMapping("/{id}/estado")
    public ResponseEntity<Tarea> cambiarEstado(
            @PathVariable Long id,
            @RequestParam EstadoTarea estado) {
        return ResponseEntity.ok(tareaService.cambiarEstado(id, estado));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tarea> actualizar(
            @PathVariable Long id,
            @RequestBody Tarea tarea,
            @RequestParam(required = false) Long usuarioId) {
        return ResponseEntity.ok(tareaService.actualizar(id, tarea, usuarioId));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        tareaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}