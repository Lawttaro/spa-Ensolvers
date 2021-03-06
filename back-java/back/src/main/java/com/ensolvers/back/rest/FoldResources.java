package com.ensolvers.back.rest;

import java.util.List;
import java.util.ArrayList;
import java.util.Collection;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ensolvers.back.dto.*;
import com.ensolvers.back.mapper.*;
import com.ensolvers.back.service.*;
import com.ensolvers.back.entity.*;
import com.ensolvers.back.rest.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FoldResources{

  @Autowired
  private FoldService foldService;
  
  @Autowired
  private FoldMapper foldMapper;
  
  @Autowired
  private TaskMapper taskMapper;  

  @Autowired
  private TaskService taskService;

  @RequestMapping("/createFold")
  @PostMapping("")
  public FoldDto createTask(@RequestBody FoldDto newData) {
    
    Fold fold = foldMapper.dtoToFold(newData);
    fold = foldService.save(fold);
    newData = foldMapper.foldToDto(fold);    
    return newData;
  }



  @PutMapping("/updFold")
  public void updateTask(@RequestBody Input input){
    if (input != null){
      List<Task> tasks =  taskMapper.listToTask(input.getColl());
      taskService.setInFold(tasks,input.getId());  
    }
  }

}