package com.ensolvers.back.entity;

import javax.annotation.processing.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id; 
import javax.persistence.Table;
import javax.persistence.Column;


@Entity
@Table(name = "Fold")
public class Fold{

  @Column(name = "id")
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