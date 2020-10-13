var canvas = null;
var img = null;
var img1 = null;
var img3 = null;
var img4 = null;
var img6 = null;
var img7 = null;
var blurImage = null;
var fileinput = null;

function displayImage()
{
  canvas = document.getElementById("can");
  fileinput = document.getElementById("fileinput");
  img = new SimpleImage(fileinput);
  img1 = new SimpleImage(fileinput);
  img3 = new SimpleImage(fileinput);
  img4 = new SimpleImage(fileinput);
  img6 = new SimpleImage(fileinput);
  blurImage = new SimpleImage(fileinput);
  img.drawTo(canvas);
}

function doWindowpane()
{
   if(imageIsLoaded(img4))
  {
    makeWindowpane();
  img4.drawTo(canvas);
  } 
}

function doGrayscale()
{  
  if(imageIsLoaded(img))
    {
     makeGrayscale();
     img.drawTo(canvas);
    }
}

function doRed()
{
  if(imageIsLoaded(img1))
  {
    makeRed();
  img1.drawTo(canvas);
    img1 = new SimpleImage(fileinput);  
  }    
}

function doBlur()
{
  if(imageIsLoaded(blurImage))
  {
    makeBlur();
  blurImage.drawTo(canvas);
  } 
}

function doRainbow()
{
  if(imageIsLoaded(img3))
  {
    makeRainbow();
  img3.drawTo(canvas);
  } 
}

function doReset()
{
   var resetImage = new SimpleImage(fileinput);
  
  resetImage.drawTo(canvas);
  img = new SimpleImage(fileinput);
  img1 = new SimpleImage(fileinput);
  img6 = new SimpleImage(fileinput);
  img3 = new SimpleImage(fileinput);
  img4 = new SimpleImage(fileinput);
}

function clearCanvas()
{
  canvas = document.getElementById("can");
 var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height); 
}

function makeGrayscale()
{
  for(var pixel of img.values())
    {
      var average = (pixel.getRed() + pixel.getGreen() +
        pixel.getBlue())/3;
      pixel.setRed(average);
      pixel.setGreen(average);
      pixel.setBlue(average);
    } 
}

function makeRed()
{
  for(var pixel of img1.values())
    {
      var average = (pixel.getRed() + pixel.getGreen() +
        pixel.getBlue())/3;
      if(average<128)
        {
          pixel.setRed(2*average);    
          pixel.setGreen(0);
          pixel.setBlue(0);    
        }
      else
        {
          pixel.setRed(255);    
          pixel.setGreen(2*average - 255);
          pixel.setBlue(2*average - 255);   
        }
    } 
}

function makeWindowpane()
{
  for(var pixel of img4.values())
    {
      var x = pixel.getX();
      var y = pixel.getY();
      
      if((pixel.getX() < 40) || (pixel.getX() < img4.getWidth() && pixel.getX() > img4.getWidth() - 40) || (pixel.getY() < 40) || (pixel.getY() < img4.getHeight() && pixel.getY() > img4.getHeight() - 40) || (pixel.getX() < img4.getWidth()/4 && pixel.getX() > img4.getWidth()/4 - 30) || (pixel.getX() < img4.getWidth()/2 && pixel.getX() > img4.getWidth()/2 - 30) || (pixel.getX() < (img4.getWidth()*3)/4 && pixel.getX() > (img4.getWidth()*3)/4 - 30) || (pixel.getY() < img4.getHeight()/2 && pixel.getY() > img4.getHeight()/2 - 30) )
        {
          pixel.setRed(72);
          pixel.setGreen(61);
          pixel.setBlue(139);
        }
      } 
}


function makeRainbow()
{
  for(var pixel of img3.values())
    {
      var average = (pixel.getRed() + pixel.getGreen() +
        pixel.getBlue())/3;
      
      var x = pixel.getX();
      var y = pixel.getY();
      
      if((y < (img3.getHeight())/7))
        {
          if(average<128)
           {
            pixel.setRed(2*average);    
            pixel.setGreen(0);
            pixel.setBlue(0);    
           }
          else
          {
            pixel.setRed(255);    
            pixel.setGreen(2*average - 255);
            pixel.setBlue(2*average - 255);   
          }
          
        }
        else if((y < (img3.getHeight()*2)/7))
        {
          if(average<128)
           {
            pixel.setRed(2*average);    
            pixel.setGreen(0.8*average);
            pixel.setBlue(0);    
           }
          else
          {
            pixel.setRed(255);    
            pixel.setGreen(1.2*average - 51);
            pixel.setBlue(2*average - 255);   
          }
      
        }
         else if((y < (img3.getHeight()*3)/7))
        {
          if(average<128)
           {
            pixel.setRed(2*average);    
            pixel.setGreen(2*average);
            pixel.setBlue(0);    
           }
          else
          {
            pixel.setRed(255);    
            pixel.setGreen(255);
            pixel.setBlue(2*average - 255);   
          }
          
        }
      else if((y < (img3.getHeight()*4)/7))
        {
          if(average<128)
           {
            pixel.setRed(0);    
            pixel.setGreen(2*average);
            pixel.setBlue(0);    
           }
          else
          {
            pixel.setRed(2*average - 255);    
            pixel.setGreen(255);
            pixel.setBlue(2*average - 255);   
          }
          
        }
      else if((y < (img3.getHeight()*5)/7))
        {
          if(average<128)
           {
            pixel.setRed(0);    
            pixel.setGreen(0);
            pixel.setBlue(2*average);    
           }
          else
          {
            pixel.setRed(2*average - 255);    
            pixel.setGreen(2*average - 255);
            pixel.setBlue(255);   
          }
          
        }
      else if((y < (img3.getHeight()*6)/7))
        {
          if(average<128)
           {
            pixel.setRed(0.8*average);    
            pixel.setGreen(0);
            pixel.setBlue(2*average);    
           }
          else
          {
            pixel.setRed(1.2*average - 51);    
            pixel.setGreen(2*average - 255);
            pixel.setBlue(255);   
          }
          
        }
      
      else if(y < img3.getHeight())
        {
          if(average<128)
           {
            pixel.setRed(1.6*average);    
            pixel.setGreen(0);
            pixel.setBlue(1.6*average);    
           }
          else
          {
            pixel.setRed(0.4*average + 153);    
            pixel.setGreen(2*average - 255);
            pixel.setBlue(0.4*average + 153); 
          }
      }
  }
}

function makeBlur()
{   
  for(var pixel of blurImage.values())
    {
      var x = pixel.getX();
      var y = pixel.getY();
      var num = Math.random();
      if(num < 0.5)
        {
          blurImage.setPixel(x,y,pixel); 
        }
      else
        {
     blurImage.setPixel(x,y,getRandomPixel(x,y,20));      
        } 
    } 
}

function getRandomPixel(x,y,distance)
{
  var randomX = x + (Math.random() * distance);
  var randomY = y + (Math.random() * distance);
  
  if(randomX < 0 )
    {
      randomX = 0;
    }
  if(randomX > img6.getWidth())
    {
      randomX = img6.getWidth() - 1;
    }
  if(randomY < 0 )
    {
      randomY = 0;
    }
  if(randomY > img6.getHeight())
    {
      randomY = img6.getHeight() - 1;
    }
  
  return img6.getPixel(randomX,randomY);
  }

function imageIsLoaded(img7)
{
  if(img7 == null || !img7.complete())
    {
       alert("Image not loaded");
    }
  else 
    {
      return true;
    }
  
}

