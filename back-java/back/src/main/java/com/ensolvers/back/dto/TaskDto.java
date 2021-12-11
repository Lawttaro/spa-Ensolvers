package com.ensolvers.back.dto;

public class TaskDto{
  private long id;
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