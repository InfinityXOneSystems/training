"""
Python Functions - Best Practices Example

This example demonstrates how to write clean, well-documented functions in Python.
"""


def greet(name):
    """
    Greet a person by name.
    
    Args:
        name (str): The name of the person to greet
        
    Returns:
        str: A greeting message
    """
    return f"Hello, {name}!"


def calculate_area(length, width):
    """
    Calculate the area of a rectangle.
    
    Args:
        length (float): The length of the rectangle
        width (float): The width of the rectangle
        
    Returns:
        float: The area of the rectangle
        
    Raises:
        ValueError: If length or width is negative
    """
    if length < 0 or width < 0:
        raise ValueError("Length and width must be non-negative")
    
    return length * width


def main():
    """
    Main function to demonstrate the examples.
    """
    # Example 1: Simple greeting
    print(greet("World"))
    
    # Example 2: Calculate area
    try:
        area = calculate_area(5, 10)
        print(f"Area of rectangle: {area}")
        
        # This will raise an error
        invalid_area = calculate_area(-5, 10)
    except ValueError as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    main()
