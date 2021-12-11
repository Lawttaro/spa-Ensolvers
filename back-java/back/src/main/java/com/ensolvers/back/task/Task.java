package com.ensolvers.back.task;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id; 

@Entity
public class Task{
  
  private @Id @GeneratedValue long id;
  private String name;


  public long getId(){
    return id;
  }

  public String getName(){
    return name;
  }

  public void setId(Long id){
    this.id = id;
  }

  public void setName(String name){
    this.name = name;
  }

}

