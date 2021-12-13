package com.ensolvers.back.rest;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.ensolvers.back.dto.TaskDto;
import com.ensolvers.back.mapper.TaskMapper;
import com.ensolvers.back.service.TaskService;
import com.ensolvers.back.entity.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TaskResources{

  @Autowired
  private TaskService taskService;
  
  @Autowired
  private TaskMapper taskMapper;

  @RequestMapping("/createTask")
  @PostMapping("")
  public TaskDto createTask(@RequestBody TaskDto taskDto) {
    
    Task task = taskMapper.dtoToTask(taskDto);
    task = taskService.save(task);
    taskDto = taskMapper.taskToDto(task);    
    return taskDto;
  }

  @PutMapping("/updateTask")
  public TaskDto updateTask(@RequestBody TaskDto newData){
    Task task = taskService.findOneById(newData.getId());    
    task.setName(newData.getName());
    taskService.saveUpdate(task);
    newData = taskMapper.taskToDto(task);
    return newData;

  }

  @DeleteMapping("/deleteTask")
  public ResponseEntity deleteTask(@RequestBody TaskDto dateRm) {

    taskService.delete(dateRm.getId());
    return new ResponseEntity<>(HttpStatus.OK);
  }

}
