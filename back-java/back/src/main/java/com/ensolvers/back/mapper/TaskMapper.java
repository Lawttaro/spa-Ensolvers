package com.ensolvers.back.mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.ensolvers.back.dto.*;
import com.ensolvers.back.entity.*;

@Component
public class TaskMapper{

  public Task dtoToTask(TaskDto source){
    if (source == null){
      return null;
    }

    Task target = new Task();
    target.setId(source.getId());
    target.setName(source.getName()); 
    return target;
  }

  public TaskDto taskToDto(Task source){
    if(source == null){
      return null;
    }
    TaskDto target = new TaskDto();
    target.setId(source.getId());
    target.setName(source.getName());
    return target;
  }


  public List<Task> listToTask(List<TaskDto> source){
    if(source == null){
      return null;
    }
		List<Task> target = source.stream()
    .map(task -> dtoToTask(task)).collect(Collectors.toList());  
    return target;
  }


	public List<TaskDto> toDTOList(List<Task> source) {
		if (source == null) {
			return null;
		}
		List<TaskDto> target = source.stream().map(task -> taskToDto(task)).collect(Collectors.toList());
		return target;	
	}


} 