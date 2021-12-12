package com.ensolvers.back.mapper;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.ensolvers.back.dto.*;
import com.ensolvers.back.entity.*;

@Component 
public class FoldMapper{

  public Fold dtoToFold(FoldDto source){
    if (source == null){
      return null;
    }
    Fold target = new Fold();
    target.setId(source.getId());
    target.setName(source.getName()); 
    return target;
  }

  public FoldDto foldToDto(Fold source){
    if(source == null){
      return null;
    }
    FoldDto target = new FoldDto();
    target.setId(source.getId());
    target.setName(source.getName());
    return target;
  }

}