package com.ensolvers.back.repository;


import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.stereotype.Repository;

import com.ensolvers.back.dto.TaskDto;
import com.ensolvers.back.entity.*;

@Repository
public class TaskRepository {

	private AtomicInteger idCounter = new AtomicInteger();
	private HashMap<Long,Task> tasks = new HashMap();
	
	public List<Task> findAll() {
		return new ArrayList<Task>(tasks.values());
	}
	
	public Task findOneById(Long id) {
		return tasks.get(id);
	}
	
	public Task save(Task task) {
		task.setId(idCounter.longValue());
		tasks.put(idCounter.longValue(), task);
		idCounter.incrementAndGet();
		return task;
	}

	public void saveUpdate(Task task){
		tasks.forEach((key,value) -> {
			if (key == task.getId()){
				value.setName(task.getName());
			}
		});
	}
// https://stackoverflow.com/questions/1066589/iterate-through-a-hashmap
	// }

	public void delete(Long id) {
		tasks.remove(id);
	}


	public void setInFold( List<Task> source, Long IdFold ){
		for (int i = 0; i < source.size(); i++){
			Task aux = source.get(i);
			tasks.forEach((key,value) -> {
				if (key == aux.getId()){
					value.setInFold(IdFold);
				}
			});
		}
	}
}