package com.ensolvers.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.ensolvers.back.task.*;
import com.ensolvers.back.repository.*;

@Service
public class TaskService{

  @Autowired
	private TaskRepository taskRepository;

  public List<Task> findAll() {
		return taskRepository.findAll();
	}

  public Task findOneById(Long id) {
		return taskRepository.findOneById(id);
	}
	
	public Task save(Task task) {
		return taskRepository.save(task);
	}
	
	
	public void delete(Long id) {
		taskRepository.delete(id);
	}

}