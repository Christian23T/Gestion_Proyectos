package com.gestion.gestion_proyectos.service;

import com.gestion.gestion_proyectos.model.Proyecto;
import com.gestion.gestion_proyectos.repository.ProyectoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProyectoService {

    private final ProyectoRepository proyectoRepository;

    public List<Proyecto> listarTodos() {
        return proyectoRepository.findAll();
    }

    public Proyecto obtenerPorId(Long id) {
        return proyectoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Proyecto no encontrado con id: " + id));
    }

    public Proyecto crear(Proyecto proyecto) {
        return proyectoRepository.save(proyecto);
    }

    public Proyecto actualizar(Long id, Proyecto datos) {
        Proyecto proyecto = obtenerPorId(id);
        proyecto.setNombre(datos.getNombre());
        proyecto.setDescripcion(datos.getDescripcion());
        proyecto.setFechaInicio(datos.getFechaInicio());
        proyecto.setFechaFin(datos.getFechaFin());
        return proyectoRepository.save(proyecto);
    }

    public void eliminar(Long id) {
        proyectoRepository.deleteById(id);
    }
}