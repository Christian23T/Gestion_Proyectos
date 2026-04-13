package com.gestion.gestion_proyectos.service;

import com.gestion.gestion_proyectos.model.Tarea;
import com.gestion.gestion_proyectos.model.Tarea.EstadoTarea;
import com.gestion.gestion_proyectos.repository.TareaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TareaService {

    private final TareaRepository tareaRepository;
    private final ProyectoService proyectoService;
    private final UsuarioService usuarioService;

    public List<Tarea> listarTodas() {
        return tareaRepository.findAll();
    }

    public List<Tarea> listarPorProyecto(Long proyectoId) {
        return tareaRepository.findByProyectoId(proyectoId);
    }

    public List<Tarea> listarPorUsuario(Long usuarioId) {
        return tareaRepository.findByUsuarioId(usuarioId);
    }

    public Tarea obtenerPorId(Long id) {
        return tareaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tarea no encontrada con id: " + id));
    }

    public Tarea crear(Tarea tarea, Long proyectoId, Long usuarioId) {
        tarea.setProyecto(proyectoService.obtenerPorId(proyectoId));
        if (usuarioId != null) {
            tarea.setUsuario(usuarioService.obtenerPorId(usuarioId));
        }
        return tareaRepository.save(tarea);
    }

    public Tarea cambiarEstado(Long id, EstadoTarea nuevoEstado) {
        Tarea tarea = obtenerPorId(id);
        tarea.setEstado(nuevoEstado);
        return tareaRepository.save(tarea);
    }

    public Tarea actualizar(Long id, Tarea datos, Long usuarioId) {
        Tarea tarea = obtenerPorId(id);
        tarea.setTitulo(datos.getTitulo());
        tarea.setDescripcion(datos.getDescripcion());
        tarea.setFechaInicio(datos.getFechaInicio());
        tarea.setFechaFin(datos.getFechaFin());
        tarea.setEstado(datos.getEstado());
        if (usuarioId != null) {
            tarea.setUsuario(usuarioService.obtenerPorId(usuarioId));
        }
        return tareaRepository.save(tarea);
    }

    public void eliminar(Long id) {
        tareaRepository.deleteById(id);
    }
}