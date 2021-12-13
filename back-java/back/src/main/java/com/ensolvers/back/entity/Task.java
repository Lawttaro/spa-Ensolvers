package com.ensolvers.back.entity;

import com.ensolvers.back.entity.*;

import javax.persistence.*;

@Entity
@Table(name = "Task")
public class Task{
  
  private @Id @GeneratedValue long id;
  private String name;

  private Long infold;


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

  public void setInFold(Long id){
    this.infold = id;
  }

}

