package com.ensolvers.back.rest;

import java.util.List;
import java.util.Collection;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ensolvers.back.dto.*;

public class Input{

  @JsonProperty("listSelect")
  private List<TaskDto> listSelect;
  @JsonProperty("infold")
  private Long infold;


  public List<TaskDto> getColl(){
    return listSelect;
  }

  public Long getId(){
    return infold;
  }

}

